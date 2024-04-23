package grpcjavaaudio.servidor;

import com.proto.audio.Audio.DataChunckResponse;
import com.proto.audio.Audio.DownloadFileRequest;

import java.io.IOException;
import java.io.InputStream;

import com.google.protobuf.ByteString;
import com.proto.audio.AudioServiceGrpc;

import io.grpc.stub.StreamObserver;


public class ServidorImpl extends AudioServiceGrpc.AudioServiceImplBase {

    @Override
    public void downloadAudio(DownloadFileRequest request, StreamObserver<DataChunckResponse> responseObserver) {
        String archivoNombre = "/" + request.getNombre();
        System.out.println("\n Enviando el archivo "+request.getNombre());

        InputStream fileStream = ServidorImpl.class.getResourceAsStream(archivoNombre);

        int bufferSize = 1024;
        byte[] buffer = new byte[bufferSize];
        //Este es el pedazo de video que va a ser enviado
        int length;
        try {
            while ((length = fileStream.read(buffer,0,bufferSize))!=-1) {
                DataChunckResponse respuesta = DataChunckResponse.newBuilder()
                .setData(ByteString.copyFrom(buffer,0,length))
                .build();
                System.out.print(".");

                responseObserver.onNext(respuesta);
            }
            fileStream.close();
        } catch (IOException e) {
            System.out.println("No se pudo obtener el archivo "+archivoNombre);
        }
        responseObserver.onCompleted();
    }
    
}
