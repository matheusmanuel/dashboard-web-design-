var clientes = document.getElementById('charClientes').getContext('2d');
var char = new Chart(clientes, {
    type: 'line',
    data: {
        labels: ["jan", "Fev", "Mar", "Abr", "Mai", "June", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "clientes",
            backgroundColor: '#fff',
            borderColor: '#4f48ec',
            data: [50, 30, 20, 60, 35, 55, 90, 80, 100,90,22,100],
        }]
    }
});

var receitas = document.getElementById('charReceitas').getContext('2d');
var chart = new Chart(receitas, {
    type: 'line',
    data: {
        labels: ["jan", "Fev", "Mar", "Abr", "Mai", "June", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Receitas",
            backgroundColor:'#fff',
            borderColor:'#38d6eb',
            data:[5000,800000,90000,70000,200000,65000,100000,200000,500000,85000,75000,1000000],
        }]
    }
})