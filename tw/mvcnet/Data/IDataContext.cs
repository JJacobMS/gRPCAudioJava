namespace mvc;

public interface IDataContext
{
    public Task<List<Producto>> ObtenerProductosAsync();
}