<?php 
    $connection=mysqli_connect('localhost','root','','clock');
    if(isset($_GET['id']))
    {
    	$evid = $_GET['id'];
    
       $sqld = "delete from addevent where eid='$evid'";
       $result = mysqli_query($connection, $sqld);
	if($result) {
	echo "<script type='text/javascript'>alert('deleted');</script>";
	echo "<script> location.href='clock.php'; </script>";
	
		}
   }
  

?>
