import React from 'react';
import * as XLSX from 'xlsx';

const FileInput = ({ onFileSelect }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'string' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      onFileSelect(sheetData);
    };

    reader.readAsText(file);
  };

  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">Upload Excel file </label>
      <input className="form-control" type="file" id="formFile" onChange={handleFileUpload} />
    </div>
  );
}

export default FileInput;
