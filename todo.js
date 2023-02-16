function generateTable(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(data=>{
        const tablebody = document.getElementById("table-body")
        let counter=0;
        data.forEach(item => {
            const row = tablebody.insertRow();
            const idCell = row.insertCell();
            const titleCell = row.insertCell();
            const completedCell = row.insertCell();
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            idCell.textContent = item.id;
            titleCell.textContent = item.title;
            completedCell.appendChild(checkbox);
            if(item.completed){
                completedCell.classList.add('completed-true');
                checkbox.checked=true;
                checkbox.disabled=true;
                counter++;
            }else{
                completedCell.classList.add('completed-false');
            }
            checkbox.addEventListener('change',event => {
                new Promise((resolve,reject)=>{
                    if(event.target.checked){
                        resolve();
                    }
                    else{
                        reject();
                    }
                })
                .then(() => {
                    counter++;
                    if(counter % 5 === 0){
                        setTimeout(()=>{
                            alert("Congrats!! You have successfully completed a set of 5 activities")},50)
                    }
                })
                .catch(() => {
                    counter--;
                });
            })
        });
    });
};

generateTable();