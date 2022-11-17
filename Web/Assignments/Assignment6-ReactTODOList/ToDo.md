# How to make a to-do list

![toDo](./ToDo.md "To Do low Fedelity")

This being a very small and very simple todolist is very simple in concept and probably simple in creating (If you didn't wish to save the todo list upon a refresh).

1) What I have is 3 very simple elements.
First, we have the Text box, where every "TO DO" item is typed.  Once an item is typed we have our second item: The submit button.  Which when pressed would access our third item, our list which we would take the input given from our text box and throw it into an uneditable list element. (These could probably be deleted for fun but also just refresh the page for the same result).

3) The point we would need to keep state of something is if our list is empty or not for starters.  We don't want random html block showing if empty so we could have an alt-text ready.  Also, if we want to keep our checked off items (say we highlight them green or something), we could state check a boolian when complete.

4) The data would surely be stored in the list object we create.  Appending an array of strings would be easy and then we could check "IndexOf()" when needing to delete a part of the list.  In which case we'd also delete it from the html probably storing its array number as the id then updating every single array id.  (Probably an easier way but my brain is mentally farting).