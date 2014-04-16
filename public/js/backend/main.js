$(document).ready(function(){
    var $multiSelect = $('.multiSelect');
    if ($multiSelect.length) {
        $multiSelect.multiselect({
            enableFiltering: true
        });
        console.log($multiSelect);
    }
});