const DownloadBtn = ({ filePath, fileName, children }) => {
    return (
        <a className="btn btn-primary" role="button" href={filePath} download={fileName}  >{children}</a>
    );
}

export default DownloadBtn