﻿using Grpc.Core;
using static AudioService;
using System.Media;
using Grpc.Net.Client;

static async Task<MemoryStream> descargarStreamAsync(AudioServiceClient stub, string nombre_archivo)
{
    using var call = stub.downloadAudio(new DownloadFileRequest
    {
        Nombre = nombre_archivo
    });

    Console.WriteLine($"Recibiendo el archivo: {nombre_archivo}");
    var writeStream = new MemoryStream();
    await foreach(var message in call.ResponseStream.ReadAllAsync())
    {
        if(message.Data != null)
        {
            var bytes = message.Data.Memory;
            Console.Write(".");
            await writeStream.WriteAsync(bytes);
        }
    }
    Console.WriteLine("\nRecepcion de datos correcta.\n\n");
    return writeStream;
}

static void playStream(MemoryStream stream, string nombre_archivo){
    if(stream != null)
    {
        Console.WriteLine($"Reproduciendo el archivo: {nombre_archivo}\n\n");
        SoundPlayer player = new(stream);
        player.Stream?.Seek(0, SeekOrigin.Begin);
        player.Play();
    }
}

using var channel = GrpcChannel.ForAddress("http://localhost:8080");

AudioServiceClient stub = new(channel);

string nombre_archivo = "sample.wav";

MemoryStream stream = await descargarStreamAsync(stub, nombre_archivo);

playStream(stream, nombre_archivo);

Console.WriteLine("Presione cualquier tecla para terminar el programa"); 
Console.ReadKey();
stream.Close();
Console.WriteLine("Apagando");
channel.ShutdownAsync().Wait();
