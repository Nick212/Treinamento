namespace API.Models
{
    public class ResultObject
    {
        #region :: Contructors ::
        
        public ResultObject()
        {
        }

        public ResultObject(string message, bool hasError)
        {
            Message = message;
            HasError = hasError;
        }

        public ResultObject(bool hasError)
        {
            Message = string.Empty;
            HasError = hasError;
        } 

        #endregion

        #region :: Properties ::

        public string Message { get; set; }
        public bool HasError { get; set; }
        public object Object { get; set; }
        #endregion
    }
}