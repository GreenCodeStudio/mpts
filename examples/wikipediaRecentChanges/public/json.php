<?php
//to fix cors
echo file_get_contents('https://en.wikipedia.org/w/api.php?action=query&list=recentchanges&format=json');