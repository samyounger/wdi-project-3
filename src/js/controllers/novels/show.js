angular
.module("noveList")
.controller("NovelShowCtrl", NovelShowCtrl);

NovelShowCtrl.$inject = ["Novel", "$stateParams", "$state", "CurrentUserService"];
function NovelShowCtrl(Novel, $stateParams, $state, CurrentUserService) {
  const vm = this;
  vm.user = CurrentUserService.getUser();

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  vm.countOf = countOf;
  vm.wordCount = 0;
  vm.wordCountStatus = true;
  vm.maxWordCount = 5;
  vm.maxEntriesCount = 5;
  vm.entriesCount = 0;
  vm.novelStatus = true;
  vm.lastEntry = true;

<<<<<<< HEAD
  function userStatus() {
    vm.lastPost = vm.novel.entries[vm.entriesCount-1].author._id;
    vm.userId = vm.user.id;
    if(vm.lastPost === vm.userId) {
      vm.novelStatus = false;
      vm.lastEntry = false;
    }
  }

  // Get showNovels data
  // Novel.get($stateParams, data => {
  //   vm.novel = data.novel;
  //   // Count how many entries there are on the page
  //   vm.entriesCount = vm.novel.entries.length;
  //   novelStatus();
  // // Get showNovels data
  // Novel.get($stateParams, data => {
  //
  //   $(document).ready(function(){
  //       $('[data-toggle="tooltip"]').tooltip();
  //   });
  //
  //   vm.novel = data.novel;
  //   console.log(vm.novel);
  // });
  //


  Novel.get($stateParams, data => {

=======
  Novel.get($stateParams, data => {
>>>>>>> 223cee31adb634fb6153876fee6b0c4d424be43b
    vm.novel = data.novel;
    // Count how many entries there are on the page
    vm.entriesCount = vm.novel.entries.length;
    novelStatus();
<<<<<<< HEAD

    if(vm.entriesCount !== 0) userStatus();

=======
    userStatus();
>>>>>>> 223cee31adb634fb6153876fee6b0c4d424be43b
  });

  function novelStatus() {
    if(vm.entriesCount >= vm.maxEntriesCount) {
      vm.novelStatus = false;
    }
    return;
  }

  function userStatus() {
    if(vm.entriesCount !== 0 && vm.novel.status === "active") {
      vm.lastPost = vm.novel.entries[vm.entriesCount-1].author._id;
      // vm.newAuthor = vm.novel.entries[vm.entriesCount-1].author;
      vm.userId = vm.user.id;
      console.log(vm.novel.entries)
      console.log(vm.userId)
      if(vm.lastPost === vm.userId) {
        vm.novelStatus = false;
        vm.lastEntry = false;
      }
      return;
    }
    return;
  }

  function countOf(text) {
    var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
    vm.wordCount = s.length;
    if(vm.wordCount > 5) {
      vm.wordCountStatus = false;
    } else {
      vm.wordCountStatus = true;
    }
    return s ? s.length : '';
  }

  // Get formData & update the novel
  vm.submitEntry = () => {
    let entryStatus = "active";
    if(vm.entriesCount >= 4) {
      entryStatus = "finished";
    }

<<<<<<< HEAD

=======
>>>>>>> 223cee31adb634fb6153876fee6b0c4d424be43b
    let data = {
      entry: vm.novel.entries.body,
      wordCount: vm.wordCount
    };

    Novel
    .addEntry($stateParams, data)
    .$promise
    .then(data => {
      Novel.get($stateParams, data => {
        vm.novel = data.novel;
        vm.novel.entries.body = null;
        novelStatus();
        userStatus();
      });
    });
<<<<<<< HEAD
=======

    Novel
    .update($stateParams, { status: entryStatus })
    .$promise
    .then(data => {
      Novel.get($stateParams, data => {
        vm.entriesCount ++;
      });
    });
>>>>>>> 223cee31adb634fb6153876fee6b0c4d424be43b
  };

  vm.submitComment = () => {
    Novel
    .addComment($stateParams, { comment: vm.novel.comments.body })
    .$promise
    .then(data => {
      Novel.get($stateParams, data => {
        vm.novel = data.novel;
        vm.novel.comments.body = null;
      });
    });
  };

  vm.novelDelete = () => {
    Novel
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("novelIndex");
    });
  };
}
