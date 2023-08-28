window.onload = function(){
    var formHandle = document.forms.politeForm;
    
    formHandle.onsubmit=processForm;

    function processForm(){
        var inputValue=formHandle.user_input.value;
        console.log(inputValue);

        var output = document.getElementById("output");


        fetch("https://api.openai.com/v1/chat/completions", 
        {
            method: 'POST',
            headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "user", "content": "Make more polite:" + inputValue}
            ],
            temperature: 0.7
            })
        }
        )
            .then(response => response.json())
            .then(data => output.innerHTML = data.choices[0].message.content)

        return false;
    }

}












