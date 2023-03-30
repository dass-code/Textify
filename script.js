// Assigning variables
const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const color = document.querySelector("#txtcolor");
const newbtn = document.querySelector("#newbtn");
const content = document.querySelector("#content");
const txtsave = document.querySelector("#txt");
const pdfsave = document.querySelector("#pdf");
//Assigning function to control buttons using execCommand
// Bold Italic Underline Color
bold.addEventListener('click', () =>{
  document.execCommand('Bold')
})

italic.addEventListener('click', () =>{
  document.execCommand('italic')
})

underline.addEventListener('click', () =>{
  document.execCommand('underline')
})

color.addEventListener('input', () =>{
  document.execCommand('foreColor', false, color.value)
})
//File
newbtn.addEventListener('click', () =>{
   content.innerHTML = ""
})

txtsave.addEventListener( "click", () =>{
  const a = document.createElement("a")
  const blob = new Blob([content.innerText])
  const dataUrl = URL.createObjectURL(blob)
  a.href = dataUrl
  a.download = Filename.value + ".txt"
  a.click() 
})
//Converting to pdf using html2pdf js library

pdfsave.addEventListener( "click", () =>{
  html2pdf().from(content.innerHTML).save(Filename.value)
})
