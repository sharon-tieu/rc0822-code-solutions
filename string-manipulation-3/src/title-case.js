/* exported titleCase */
function titleCase(title) {
  title = title.split(' ');
  var specialWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < title.length; i++) {
    title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase();
    if (specialWords.includes(title[i].toLowerCase()) && i !== 0) {
      if (title[i - 1].includes(':')) {
        continue;
      }
      title[i] = title[i].toLowerCase();
    } else if (title[i].toLowerCase() === 'api') {
      title[i] = title[i].toUpperCase();
    } else if (title[i].toLowerCase().includes('javascript')) {
      var javascript = title[i].split('');
      for (var j = 0; j < javascript.length; j++) {
        if (javascript[j].toLowerCase() === 'j' || javascript[j].toLowerCase() === 's') {
          javascript[j] = javascript[j].toUpperCase();
        } else {
          javascript[j] = javascript[j].toLowerCase();
        }
      }
      title[i] = javascript.join('');
    } else if (title[i].includes('-')) {
      var hyphenWord = title[i].split('-');
      for (var k = 0; k < hyphenWord.length; k++) {
        hyphenWord[k] = hyphenWord[k][0].toUpperCase() + hyphenWord[k].slice(1).toLowerCase();
        // console.log('hyphenWord:', hyphenWord[k]);
      }
      title[i] = hyphenWord.join('-');
    }
    if (title[i].includes(':')) {
      title[i + 1] = title[i + 1][0].toUpperCase() + title[i + 1].slice(1).toLowerCase();
      // console.log(title[i + 1]);
    }
  }
  // console.log(title);
  return title.join(' ');
}
