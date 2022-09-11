let ugl = 0
let pwr = 0
let std = 1
let pls = 0
let plsu = 0
let prc = 0
let prcu = 0
let proc = document.getElementById('proc')
let cont = document.getElementById("cont")
let boll = document.getElementById("boll")

let timerId = setInterval(() => 
{
	if (prc == 100) pls = -20
	else if (prc == 0) pls = 20
	prc = prc + pls
	proc.innerHTML = prc + '%'

	if (prcu == 100) plsu = -20
	else if (prcu == 0) plsu = 20
	prcu = prcu + plsu



}, 150)

cont.onclick = () => 
{
	if (std < 3) 
	{
		std++
	}
	else
	{
		std = 1
		let flyb = document.querySelector('.std3 #boll')
		console.log(ugl, pwr)
		ugl = 0
		pwr=0

	}
	std==3 && setTimeout(()=>cont.click(),2000)
	std==1 && boll.removeAttribute('style')
	std==2 ? pwr=prc : 0
	std==3 ? boll.style.transform = 'translate('+(ugl*5-300)+'px, -'+(pwr*2+420)+'px) scale(0.35)' : 0
	std==1 ? ugl=prcu : 0

	cont.className = 'std' + std


}