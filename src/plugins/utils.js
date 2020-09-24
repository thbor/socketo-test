export const parseDate1=(date)=>{
	let all = new Date(date)
	let y = all.getFullYear()
	let m = all.getMonth()+1
	let d = all.getDate()
	let h = all.getHours()
	let min = all.getMinutes()
	let second = all.getSeconds()
	m=addZero(m)
	d=addZero(d)
	h=addZero(h)
	min=addZero(min)
	second=addZero(second)
	return `${y}-${m}-${d} ${h}:${min}:${second}`
}
export const addZero=(num)=>{
	return (num<10?'0'+num:num)
}