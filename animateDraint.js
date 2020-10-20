<script>
	var trd = [
            39.2095893,-6.1720152
          ],
          mad=[
            39.2096556,-6.1718892
          ],
         lnd= [
            39.2099992, -6.1713977
          ],
         ams= [
            39.2102641,-6.1710237
          ],
          vlc=[
            39.210652,
            -6.1704627
          ];
		  
		  var route = L.featureGroup([
			L.marker(trd),
			L.polyline([trd, vlc])
			/*L.marker(ams),
			L.polyline([ams, lnd]),
			L.marker(lnd),
			L.polyline([lnd, mad]),
			L.marker(mad),
			L.polyline([mad, vlc]),
			L.marker(vlc)*/		]);
			map.fitBounds(route.getBounds());
        
</script>