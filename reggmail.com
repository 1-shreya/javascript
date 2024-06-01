<script>
    // ^-->1st char
    // ^-->last char
   var regex=   /^([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/
    var website="e-d-u.in"
    var result=regex.test(website)
    console.log(result)
</script>