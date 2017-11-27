# jpagination-bootstrap
This project aims to facilitate the implementation of dynamic pagination using jQuery, css and Bootstrap. With only 5 calls the paging is created dynamically.

# How to use:

* Step 1 is to link the application to the jpagination.css and jpagination.js file.

      <link rel="stylesheet" href="jpagination.min.css">
      <script src="jpagination.min.js"></script>
      
* Step 2 is to link the dependencies of jQuery and Bootstrap.

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

* Step 3 is to add the 'item' class to the dynamic object to be paginated.

      <div class="col-xs-3 item">col1</div>

* Step 4 is to create the markup to receive the buttons on the pages.

      <ul class = "pagination" id = "pagination">
      </ul>

* Step 5 is to make the jQuery call at the bottom of the page.

      $ (document) .ready (function () {generate ('pagination', countItems, itemsPerPage)});
    
* replace countItems by the total amount of items to display.

* replace itemsPerPage by the quantity to be displayed per page.
