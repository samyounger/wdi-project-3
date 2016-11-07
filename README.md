# wdi-project-3
===

##Novelists: A collaborative writing website, novels inspired by images from the Unsplash API

### Assignment
**Description:** Within a team of 4, come up with a website idea, design it, and develop it. It should have a back-end API, front-end logic, however there is no requirement to use data from a third party API.

###Technologies used:
We used the following technologies to make this website:
- HTML/SASS
- Bootstrap (heavily edited)
- AngularJS
- NodeJS
- MongoDB
- Express
The photos are drawn from the Unsplash API.

### Chosen topic
**Description:** A website which allows writers to take inspiration from a beautiful photo, and write a novel collaboratively (one novelist writes one entry, another writes the next). The users should have a visible profile page to see what novels they have contributed to, and to be able to write comments on novels. The API by Unsplash is to be used because of its fantastic high definition images.

---

### User experience
1. The homepage should be simple, a full-page image with a button to login/register.
2. The user registers with:
	- Username
	- Firstname
	- Lastname
	- Image of themselves
	- Email (for their login)
	- Password
	- Password confirmation
3. The user logs in with email and password.
4. The landing pager after logging in is the index of all novels in progress, or having been written.
	- the user can access any of the novels and add an entry if the Novel is not completed.
5. The user can click 'Add a novel', where a new unsplash image is drawn in and the user can add the title of the image to create the novel.
6. Once the novel has been created, the page seamlessly transitions to the novelShow page where the user can write the first entry.
7. Once the entry has been written, the user cannot add another entry until someone else has written the next section.
8. On this page at the bottom is a comments section.
9. The user has a profile page they can access. Here the user can see what novels they have created, and separately what novels they have contributed to.

**Addional points:** The site should be mobile responsive.

---

### Application programming interfaces to use:

1. **Unsplash:** [Link] (https://unsplash.it/)
2. The rest of the App will have its own back-end API built with NodeJS & Express.

### Colour Theme
The website should have a subtle colour scheme. The overiding palette is white & black, however there should be one colour
Initial colour Palette: 
![Colour Palette](images/color-palette.png "Image of the color palette")

### Font
The website should have a clean smooth font to fit with the crisp look we're going for. A variety of fonts were looked at, however the two winners are:
- Quicksand for the header & novel titles
- Lato for all other text

###Thinking through the problem

**Authentication:**
- It would be nice for visitors to the page to be able to view the novels without being able to edit them unless they register.

**The novels:**
A user can create a novel taking inspiration from the photo. The image is pulled in with the Unsplash API, saving the image id to the database. It would be nice to save the image to a DB, however given this has not been done before and the time constraints, we probably won't have the time.
Make full use of front-end logic, having recently been taught AngularJS. The logic should be used to detect if the user wrote the previous post, and if so prevent them from writing. In addition, if the novel has had 5 posts, then on saving the post an additional tag is saved to the DB => that the novel status is 'Finished'.
The novel id should be saved to the users profile so it can be accessed later in relation to their profile.
Any user can write commets on the novels.