const DownloadBtn = ({ filePath, fileName, children }) => {
    return (
        <a className="col-auto btn btn-primary m-2" role="button" href={filePath} download={fileName}  >{children}</a>
    );
}

export default DownloadBtn