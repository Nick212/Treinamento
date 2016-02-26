using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace TesteXml
{
    public class ResponseFusion
    {
        #region Atributos
        private int errorCode;
        private string errorMessage;
        #endregion

        #region Proprieties
        public int ErrorCode
        {
            get { return errorCode; }
            set { errorCode = value; }
        }

        public string ErrorMessage
        {
            get { return errorMessage; }
            set { errorMessage = value; }
        }
        #endregion

        public List<string> ObterRespostaDeserializada(string message)
        {
            List<string> errorCode = new List<string>();

            TextReader sr = new StringReader(message);
            XElement xml = XElement.Load(sr);

            foreach (XElement x in xml.Elements())
            {
                errorCode.Add(x.Value);
            }
            return errorCode;
        }


    }

}
