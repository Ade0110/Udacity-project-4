function handleSubmit(event) {
  event.preventDefault()


  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)

  const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
  const apiKey = "330ddf4e6e33e45b1a9cf7de8bbc24b1";
  const urlPath = baseUrl + apiKey + '&lang=en&txt='+ formText;
  
  fetch(urlPath)
  .then(res => {
      return res.json()
  })
  .then(function(data) {
      var all_results = '<p>Subjectivity: '+data.subjectivity+'</p>';
      all_results += '<p>Agreement: '+data.agreement+'</p>';
      all_results += '<p>Irony: '+data.irony+'</p>';
      all_results += '<p>Confidence: '+data.confidence+'</p>';
      document.getElementById('results').innerHTML = all_results;
      // +data.agreement+'<br>'+data.irony+'<br>'+data.confidence;
      // document.getElementById('results').innerHTML = data.agreement;
      // document.getElementById('results').innerHTML = data.irony;
      // document.getElementById('results').innerHTML = data.confidence;
  })
  

  }
  


 
export { handleSubmit };