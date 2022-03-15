function calc(a)
		{
			document.getElementById("inval").value+=a;
		}

		function calc1()
		{
			let x=document.getElementById("inval").value
			if(x=="")
			{
				alert("U have not given the value");
			}
			else
			{
				let y=eval(x);
				document.getElementById("inval").value=y;
			}
		}
		function clearme()
		{
			document.getElementById("inval").value="";
		}
