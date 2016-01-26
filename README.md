# Formule Newsletter

TYPO3 Extension to handle newsletter subscription based on EXT:formule. The User can also unsubscribe or edit its newsletter preferences.

Data are stored in `tt_address` which is a dependency to the extension. We use our `tt_address` fork which is available at https://github.com/Ecodev/tt_address. Refer to the [Readme](https://github.com/Ecodev/tt_address#how-to-load-this-fork) how to load this fork.  

The newsletter subscription workflow goes as follows:

Step 1
------

- the User fill-in the form. Submitted data are stored into the database (table tt_address)
- an email is sent to the admin: new subscription
- an email is sent to the user: email confirmation via a link.

Step 2
------

- the user confirms its email address by clicking on the link
- the user lands on a page where he can edit its newsletter preferences
