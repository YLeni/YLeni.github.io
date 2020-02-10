<script>
$(document).on("keypress", "crowd-input", function(e){
  if(e.which == 13){
      var inputVal = $(this).val();
      alert("You've entered: " + inputVal);
  }
});
</script>
