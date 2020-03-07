let button = document.getElementById("request");
button.addEventListener(
    "click",
    function(){
        let hr = new XMLHttpRequest();
        hr.open("GET", "http://localhost:88/");
        hr.onreadystatechange = function(){
            if (this.readyState === this.DONE){
                if (this.status !== 200){
                    console.log("Ощибка "+this.status);
                } else{
                    console.log(this.statusText);
                    console.log(this.responseText);
                }

            }
        };
        hr.send();
    }
    );