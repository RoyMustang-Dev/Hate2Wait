

function selectdDevice(device)
{
	
	localStorage.setItem("deviceName",device)
	if(device=="laptop")
	{
		document.getElementById("listLaptop").style.display="block"
		document.getElementById("listMobile").style.display="none"
		document.getElementById("selectDevice1").style.display="none"
		
	}
	else if(device=="mobile")
	{
		document.getElementById("listLaptop").style.display="none"
		document.getElementById("listMobile").style.display="block"
		document.getElementById("selectDevice1").style.display="none"
	}
}

function setCompany(company,device)
{
	
	localStorage.setItem("company",company)
	document.getElementById("formID").style.display="block"
	document.getElementById("devicename").value=localStorage.getItem("company")
	document.getElementById("companyname").value=localStorage.getItem("deviceName")

	if(device=="laptop")
	{
		document.getElementById("listLaptop").style.display="none"
		
		
	}
	else if(device=="mobile")
	{
		
		document.getElementById("listMobile").style.display="none"
	
	}
	
}
