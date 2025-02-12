let inputEl = document.getElementById("addText")
        let outputList = document.getElementById("outputList")
        let deleteAll = document.getElementById("deleteall")
        let tracker = document.getElementById("tracker");

        function toDoList() {
            if (inputEl.value === "") {
                alert("please enter valid value")
            }
            else {
                let li = document.createElement("li"); //just created new html element without html and gave a variable name called li
                li.innerHTML = inputEl.value; //output will be taken from inputElement's value 
                li.classList.add("to-do-item"); //declared the class name so u can edit in css
                outputList.appendChild(li) // This line takes the <li> element (li) and adds it as a child to the outputList
                
                // Add delete button
                let span = document.createElement("span");
                span.classList.add("crossign")
                span.innerHTML = "\u00d7";  // '×' symbol
                span.onclick = function() {
                li.remove();
                };

                li.appendChild(span); // This line takes the <span> element (span) and adds it as a child to the li

            }
            inputEl.value = ""
            updateTracker();
        }
        function updateTracker() {
            let count= outputList.children.length;
            tracker.innerHTML = count
        }
        function deleteButton() {
            outputList.innerHTML = ""
        }