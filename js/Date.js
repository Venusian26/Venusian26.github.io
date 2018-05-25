<script type="text/javascript">
function hora() {
 var DateString=(new Date()).toString();
 self.status=DateString.substring(0,3+DateString.lastIndexOf(':'))+
 "Cualquier mensaje";
 setTimeout("hora()",200);}
hora()
</script>
