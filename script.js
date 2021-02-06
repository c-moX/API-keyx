// Step: 01
        // JSON, JSON Structure, parse, stringify, JSON properties:
        // const javaScript = {
        //     id: 120,
        //     name: "manuel",
        //     age: 20
        // };
        // const javaScriptToJson = JSON.stringify(javaScript);
        // console.log(javaScriptToJson);       // JSON === {"id":120, "name":"manuel"}
        // // *****
        // const jsonToJavaScript = JSON.parse(javaScriptToJson);
        // console.log(jsonToJavaScript);      // JSON === {id: 120, name: "manuel"}


        // Step: 02
        // Load data, JSON placeholder, GET data, display data on UI:
        // Create JSON file to html ul/li iteams:
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => displatUser(json))
        //     .catch(error => console.log(error));

        //     function displatUser(users){
        //         const userName = users.map(user => user.username);
        //         const ul = document.getElementById("user-container");
        //         // console.log(userName);

        //         for( let i = 0; i < userName.length; i++){
        //             const username = userName[i];
        //             const li = document.createElement("li");
        //             li.innerText = username;
        //             ul.appendChild(li);

        //         }
        //     }


        // Step: 03
        // Explore fun tasks with bored api:
        function doSomething(){
            fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(data => {
                document.getElementById("activity").innerHTML = data.activity;
            });
        }
        doSomething();

        // xxx::xxx
        setInterval(() => {
            doSomething();
        }, 1000);


        // Step: 04
        // Explore Random User API Who Am I:
        function differentUserName() {
            fetch('https://randomuser.me/api')
                .then(res => res.json())
                .then(data => {
                    const user = data.results[0];
                    const name = user.name;
                    const userName = `${name.title} ${name.first} ${name.last}`;

                    document.getElementById("user-name").innerText = userName;
                });
        }
        differentUserName();
