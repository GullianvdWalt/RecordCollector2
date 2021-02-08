$(document).ready( function () {
	 var table = $('#myTable').DataTable({
			"sAjaxSource": "/getRecords"",
			"sAjaxDataProp": "",
			"order": [[ 0, "asc" ]],
			"aoColumns": [
			    { "mData": "id"},
			    { "mData": "artist"},
		      { "mData": "album" },
				  { "mData": "catalog_number" },
				  { "mData": "record_condition" },
				  { "mData": "pressing" },
				  { "mData": "remarks" },
				  { "mData": "year" },
				  { "mData": "on_discogs" },
				  { "mData": "discogs_link" }
			]
	 })
});
