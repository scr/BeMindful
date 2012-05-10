(function() {
     function restoreOptions() {
	 document.getElementById('baseTime').value = localStorage['baseTime'] || 1000;
	 document.getElementById('randomTime').value = localStorage['randomTime'] || 1000;
	 document.getElementById('cancelTime').value = localStorage['cancelTime'] || 5000;
     }
     function saveOptions() {
	 localStorage['baseTime'] = document.getElementById('baseTime').value;
	 localStorage['randomTime'] = document.getElementById('randomTime').value;
	 localStorage['cancelTime'] = document.getElementById('cancelTime').value;
     }
     function init() {
	 restoreOptions();
	 var saveButton = document.getElementById('save');
	 saveButton.addEventListener('click', saveOptions);
     }
     document.addEventListener('DOMContentLoaded', init);
 })(this);
