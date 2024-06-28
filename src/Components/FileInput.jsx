import React from 'react';
import * as XLSX from 'xlsx';

const FileInput = ({ onFileSelect }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'string' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      onFileSelect(sheetData);
    };

    reader.readAsText(file);
  };

  return (
    <div class="mb-3">
      <label for="formFile" class="form-label">Default file input example</label>
      <input class="form-control" type="file" id="formFile" onChange={handleFileUpload} />
    </div>
  );
}

export default FileInput;
