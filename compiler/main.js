// Script.js 
const htmlCode = 
	document.getElementById('htmlCode'); 
const cssCode = 
	document.getElementById('cssCode'); 
const jsCode = 
	document.getElementById('jsCode'); 
const output = 
	document.getElementById('output') 
const previewFrame = 
	document.getElementById('preview'); 
const runButton = 
	document.getElementById('runButton'); 
const clearButton = 
	document.getElementById('clearButton'); 
const downloadButton = 
	document.getElementById('downloadButton'); 

const updatePreview = () => { 
	const html = htmlCode.value; 
	const css = 
`<style>${cssCode.value}</style>`; 
	const js = 
`<script>${jsCode.value}</script>`; 

	const code = `${html}\n${css}\n${js}`; 
	output.innerHTML = code;} 

const clearCode=() => { 
	htmlCode.value = ''; 
	cssCode.value = ''; 
	jsCode.value = ''; 
	updatePreview()} 

const downloadCode = () => { 
	const zip = new JSZip(); 
	zip.file("index.html", htmlCode.value); 
	zip.file("styles.css", cssCode.value); 
	zip.file("script.js", jsCode.value); 

	zip.generateAsync({ type: "blob" }). 
		then(function (content) { 
		saveAs(content, "code.zip"); 
	})} 

// Initial preview update 
updatePreview(); 
downloadButton.addEventListener('click', () => { 
	const zip = new JSZip(); 
	zip.file("index.html", htmlCode.value); 
	zip.file("styles.css", cssCode.value); 
	zip.file("script.js", jsCode.value); 
	zip.generateAsync({ type: "blob" }) 
		.then( (content)=> { 
			saveAs(content, "code.zip"); 
		})}); 
		
runButton.addEventListener('click', updatePreview); 
clearButton.addEventListener('click', clearCode); 
downloadButton.addEventListener('click', downloadCode);
