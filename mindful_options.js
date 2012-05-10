(function() {
     function restoreOptions() {
	 document.getElementById('baseTime').value = localStorage['baseTime'] || 1000;
	 document.getElementById('randomTime').value = localStorage['randomTime'] || 1000;
     }
     function saveOptions() {
	 localStorage['baseTime'] = document.getElementById('baseTime').value;
	 localStorage['randomTime'] = document.getElementById('randomTime').value;
	 alert('saved');
     }
     function init() {
	 restoreOptions();
	 var saveButton = document.getElementById('save');
	 saveButton.addEventListener('click', saveOptions);
     }
     document.addEventListener('DOMContentLoaded', init);
 })(this);