$(document).ready(function () {
  $(".slider").slider({
    indicators: false,
    transition: 500,
    height: 500
  })

  $(".autocomplete").autocomplete({
    data: {
      Medicol: null,
      Diatab: null,
      Pampers: null,
      Alaxan: null,
      Katol: null,
      Salbutamol: null,
      Sangobion: null
    }
  })
})
