using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;


namespace ContactManager.Logger
{
    /// <summary>
    /// Class Logger
    /// </summary>
    public class Logger
    {

        #region Static Vars

        /// <summary>
        /// Log file name
        /// </summary>
        private static readonly string LogFile = System.Web.Hosting.HostingEnvironment.MapPath("~")
            + "Logger\\log.txt";
        private static Logger instance = new Logger();

        #endregion

        #region Properties
        /// <summary>
        /// Property Failure Count
        /// </summary>
        public int FailCount
        {
            get;
            private set;
        }

        #endregion


        #region Constructor

        /// <summary>
        /// Logger Constructor
        /// </summary>
        /// <param name="logFolder">Log Folder</param>
        private Logger()
        {
            if (File.Exists(LogFile))
            {
                File.Delete(LogFile);
            }
        }

        #endregion

        #region Public Methods

        public static Logger GetInstance()
        {
            return instance;
        }


        /// <summary>
        /// Write one line of log info
        /// </summary>
        /// <param name="line">One line of log info</param>
        public void WriteLine(string line)
        {
            using (var log = File.AppendText(LogFile))
            {
                log.WriteLine(line);
            }
        }

        #endregion
    }
}