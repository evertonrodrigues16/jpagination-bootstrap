# jpagination-bootstrap
This project aims to facilitate the implementation of dynamic pagination using jQuery, css and Bootstrap. With only 3 calls the paging is created dynamically.

Este projeto visa facilitar a implementação da paginação dinâmica usando jQuery, css e Bootstrap. Com apenas 3 chamadas, a paginação é criada dinamicamente.

How to use:

Step 1 is to link the application to the jpagination.css and jpagination.js file.

Step 2 is to link the dependencies of jQuery and Bootstrap.

Step 3 is to add the 'item' class to the dynamic object to be paginated.

Step 4 is to create the markup to receive the buttons on the pages.

<ul class = "pagination" id = "pagination">
</ul>

Step 5 is to make the jQuery call at the bottom of the page.
                 
$ (document) .ready (function () {
generate ('pagination', countItems, itemsPerPage)
});

* replace countItems by the total amount of items to display.

* replace itemsPerPage by the quantity to be displayed per page.
