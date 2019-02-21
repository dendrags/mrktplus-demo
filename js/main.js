             //  0        1          2
             let fruits = [
                {name:"Chips", available:true},
                {name:"Tomatos", available:true}, 
                {name:"Apple Cidar", available:false},
                 {name:"Chicken Boneless", available:false},
                 {name:"Baguette", available:false}
              ];
              
              // Pushing add a new WHATEVER to the Array
              //fruits.push("blueberry");
              
              
              
              // Create an empty array & copy FILTERED fruits to it
              //let tempAr = fruits.filter(frt => frt == 'banana');
              
              fruits.forEach(frt => {
                // The old way we printed items
                //document.getElementById('fruits').innerHTML += `<li>${frt}</li>`;
                
                // Create a new element:            <li></li>
                var oneFruit = document.createElement('div');
                
                // Add inner HTML to it:            <li>apple</li>
                oneFruit.innerHTML = frt.name;
                
                // Add a class to it:               <li class="fruit">apple</li>
                oneFruit.classList.add('fruit');
                
                // If the fruit is unavailable:     <li class="fruit unavailable">apple</li>
                if (frt.available == false)
                  oneFruit.classList.add('checked');
                
                // Add it to the fruits list:       <ul id="fruits"><li class="fruit unavailable">apple</li></ul>
                document.getElementById('fruits').appendChild(oneFruit);
                
              });
              
              
              