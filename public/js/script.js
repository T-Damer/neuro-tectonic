window.onload = function () {
  $('#img3').toggle()
  $('#img4').toggle()
  $('#img5').toggle()
  $('#img6').toggle()
  $('#img7').toggle()
  $('#img8').toggle()
  $('#img9').toggle()
  $('#img10').toggle()
  $('#img11').toggle()
  $('#img12').toggle()
  $('#img13').toggle()
  $('#img14').toggle()
  $('#img15').toggle()
  $('#img16').toggle()
  $('#img17').toggle()
  $('#img18').toggle()
  $('#img19').toggle()
  $('#img20').toggle()
  $('#img21').toggle()
  $('#img22').toggle()
  $('#img23').toggle()
  $('#img24').toggle()
  $('#img25').toggle()
  $('#img26').toggle()
  $('#img27').toggle()
  $('#img28').toggle()
  $('#img29').toggle()
  $('#img30').toggle()
  $('#img31').toggle()
  $('#img32').toggle()
  $('#img33').toggle()
  $('#img34').toggle()
  $('#img35').toggle()
  $('#img36').toggle()
  $('#img37').toggle()
  $('#img38').toggle()
  $('#img39').toggle()
  $('#img40').toggle()
  $('#img41').toggle()
  $('#img42').toggle()
  $('#img43').toggle()
  $('#img44').toggle()
  $('#img45').toggle()
  $('#img46').toggle()
  $('#list41').addClass('line')
  $('#list3').addClass('line')
  $('#list4').addClass('line')
  $('#list5').addClass('line')
  $('#list6').addClass('line')
  $('#list7').addClass('line')
  $('#list8').addClass('line')
  $('#list9').addClass('line')
  $('#list10').addClass('line')
  $('#list11').addClass('line')
  $('#list12').addClass('line')
  $('#list13').addClass('line')
  $('#list14').addClass('line')
  $('#list15').addClass('line')
  $('#list16').addClass('line')
  $('#list17').addClass('line')
  $('#list18').addClass('line')
  $('#list19').addClass('line')
  $('#list20').addClass('line')
  $('#list21').addClass('line')
  $('#list22').addClass('line')
  $('#list23').addClass('line')
  $('#list24').addClass('line')
  $('#list25').addClass('line')
  $('#list26').addClass('line')
  $('#list27').addClass('line')
  $('#list28').addClass('line')
  $('#list29').addClass('line')
  $('#list30').addClass('line')
  $('#list31').addClass('line')
  $('#list32').addClass('line')
  $('#list33').addClass('line')
  $('#list34').addClass('line')
  $('#list35').addClass('line')
  $('#list36').addClass('line')
  $('#list37').addClass('line')
  $('#list38').addClass('line')
  $('#list39').addClass('line')
  $('#list40').addClass('line')

  $('.sub li').click(function () {
    if ($(this).hasClass('line')) {
      $(this).removeClass('line')
    } else {
      $(this).addClass('line')
    }
    var listId = $(this).attr('id')
    $('img').each(function () {
      if ($(this).attr('id') == 'img' + listId.substring(4)) {
        $(this).toggle('fast')
      }
    })
  })

  $('.panel li').click(function () {
    if (!$(this).hasClass('bigli') && !$(this).parent().hasClass('sub')) {
      if ($(this).hasClass('line')) {
        $(this).removeClass('line')
      } else {
        $(this).addClass('line')
      }
      var listId = $(this).attr('id')
      $('img').each(function () {
        if ($(this).attr('id') == 'img' + listId.substring(4)) {
          $(this).toggle('fast')
        }
      })
    }
  })

  $('.groupname').click(function () {
    if (!$(this).hasClass('close')) {
      $(this).addClass('close')
      $(this)
        .next()
        .children()
        .each(function () {
          $(this).addClass('line')

          var listId = $(this).attr('id')
          $('img').each(function () {
            if ($(this).attr('id') == 'img' + listId.substring(4)) {
              $(this).hide('fast')
            }
          })
        })
    } else {
      $(this).removeClass('close')
      $(this)
        .next()
        .children()
        .each(function () {
          $(this).removeClass('line')

          var listId = $(this).attr('id')
          $('img').each(function () {
            if ($(this).attr('id') == 'img' + listId.substring(4)) {
              $(this).show('fast')
            }
          })
        })
    }
  })

  $('#x_button').click(function () {
    $('.panel-conntainer').toggle('fast')
  })

  $('.plus').click(function () {
    if ($(this).text() == '+') {
      $(this).text('-')
    } else {
      $(this).text('+')
    }
    $(this).next().next().toggle('fast')
  })
}
