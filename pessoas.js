const PESSOAS = [
	{
		"nome": "Sara Hadassa Figueiredo",
		"idade": 39,
		"cpf": "594.404.979-04",
		"rg": "10.673.316-3"

	},
	{
		"nome": "Camila Isadora da Costa",
		"idade": 76,
		"cpf": "214.838.743-03",
		"rg": "30.179.262-8"

	},
	{
		"nome": "Vitória Luciana Betina Bernardes",
		"idade": 21,
		"cpf": "141.383.859-67",
		"rg": "16.594.482-1"

	},
	{
		"nome": "Leandro Filipe Lopes",
		"idade": 22,
		"cpf": "100.361.279-22",
		"rg": "26.132.192-4"

	},
	{
		"nome": "Fabiana Alessandra Drumond",
		"idade": 30,
		"cpf": "769.005.598-24",
		"rg": "50.930.158-7"

	},
	{
		"nome": "Samuel Sebastião Enzo Alves",
		"idade": 67,
		"cpf": "303.965.361-07",
		"rg": "31.398.667-8"

	},
	{
		"nome": "Maitê Regina Evelyn Ribeiro",
		"idade": 25,
		"cpf": "272.980.155-32",
		"rg": "33.654.085-1"

	},
	{
		"nome": "Lorena Elza Luzia Silva",
		"idade": 52,
		"cpf": "920.482.987-70",
		"rg": "40.717.475-8"

	},
	{
		"nome": "Paulo Oliver Almeida",
		"idade": 67,
		"cpf": "823.287.689-11",
		"rg": "32.829.337-4"

	},
	{
		"nome": "Pedro Nicolas João Martins",
		"idade": 46,
		"cpf": "367.423.880-21",
		"rg": "45.317.138-2"

	},
	{
		"nome": "Allana Eduarda Nina Freitas",
		"idade": 29,
		"cpf": "980.165.752-93",
		"rg": "28.743.733-4"

	},
	{
		"nome": "Calebe Thales Barros",
		"idade": 44,
		"cpf": "042.682.896-82",
		"rg": "12.104.901-2"

	},
	{
		"nome": "Raimunda Hadassa Gabriela da Cruz",
		"idade": 23,
		"cpf": "800.013.583-32",
		"rg": "28.694.796-1"

	},
	{
		"nome": "Augusto Roberto Ian Barbosa",
		"idade": 63,
		"cpf": "770.277.652-84",
		"rg": "45.060.408-1"

	},
	{
		"nome": "Simone Sophia Campos",
		"idade": 61,
		"cpf": "093.560.614-91",
		"rg": "42.930.556-4"

	},
	{
		"nome": "Pedro Vinicius Pinto",
		"idade": 55,
		"cpf": "656.902.588-06",
		"rg": "17.747.698-9"

	},
	{
		"nome": "Melissa Márcia Silva",
		"idade": 18,
		"cpf": "912.397.238-65",
		"rg": "45.749.111-5"

	},
	{
		"nome": "Heitor Alexandre Souza",
		"idade": 20,
		"cpf": "564.407.672-59",
		"rg": "18.402.007-4"

	},
	{
		"nome": "Bryan Caio Thiago Nogueira",
		"idade": 69,
		"cpf": "171.571.279-03",
		"rg": "15.254.366-1"

	},
	{
		"nome": "Louise Patrícia Antonella Pinto",
		"idade": 72,
		"cpf": "627.841.703-06",
		"rg": "48.921.210-4"

	},
	{
		"nome": "Lavínia Sophia Nunes",
		"idade": 37,
		"cpf": "200.167.780-49",
		"rg": "31.775.646-1"

	},
	{
		"nome": "Guilherme Renato Felipe Pires",
		"idade": 43,
		"cpf": "214.209.793-61",
		"rg": "14.405.065-1"

	},
	{
		"nome": "Rosa Flávia Jaqueline Novaes",
		"idade": 72,
		"cpf": "978.504.463-72",
		"rg": "46.505.191-1"

	},
	{
		"nome": "Elaine Ayla Carla Araújo",
		"idade": 66,
		"cpf": "475.536.483-37",
		"rg": "30.311.686-9"

	},
	{
		"nome": "Luzia Daiane Jesus",
		"idade": 52,
		"cpf": "224.457.599-35",
		"rg": "49.779.957-1"

	},
	{
		"nome": "Lúcia Evelyn Sebastiana Costa",
		"idade": 77,
		"cpf": "952.901.909-29",
		"rg": "44.337.048-5"

	},
	{
		"nome": "João Diogo Rafael Porto",
		"idade": 49,
		"cpf": "440.641.248-47",
		"rg": "13.374.631-8"

	},
	{
		"nome": "Guilherme Thiago Farias",
		"idade": 18,
		"cpf": "227.034.691-28",
		"rg": "41.965.367-3"

	},
	{
		"nome": "Diego Pietro Brito",
		"idade": 22,
		"cpf": "893.529.870-04",
		"rg": "31.477.929-2"

	},
	{
		"nome": "Gustavo Iago Martin da Conceição",
		"idade": 73,
		"cpf": "809.744.336-83",
		"rg": "46.096.727-7"

	},
	{
		"nome": "Breno Roberto Luan Porto",
		"idade": 29,
		"cpf": "414.475.621-19",
		"rg": "27.549.730-6"

	},
	{
		"nome": "Ruan Severino da Luz",
		"idade": 24,
		"cpf": "761.020.253-34",
		"rg": "14.342.559-6"

	},
	{
		"nome": "Sônia Isabelle Larissa Cardoso",
		"idade": 43,
		"cpf": "548.577.527-60",
		"rg": "44.313.129-6"

	},
	{
		"nome": "Débora Nair Eliane da Paz",
		"idade": 36,
		"cpf": "833.811.616-52",
		"rg": "34.708.550-7"

	},
	{
		"nome": "Isaac Matheus Novaes",
		"idade": 74,
		"cpf": "316.890.823-13",
		"rg": "42.324.783-9"

	},
	{
		"nome": "Mariah Laís Stefany da Luz",
		"idade": 71,
		"cpf": "490.696.323-49",
		"rg": "39.483.065-9"

	},
	{
		"nome": "Arthur Yuri Luís da Paz",
		"idade": 31,
		"cpf": "917.293.116-79",
		"rg": "26.760.867-6"

	},
	{
		"nome": "Betina Letícia Fernanda Vieira",
		"idade": 72,
		"cpf": "749.411.972-83",
		"rg": "25.292.486-1"

	},
	{
		"nome": "Joaquim Leandro Geraldo Costa",
		"idade": 68,
		"cpf": "803.266.189-10",
		"rg": "17.843.567-3"

	},
	{
		"nome": "Mateus Luan Aragão",
		"idade": 72,
		"cpf": "271.078.534-06",
		"rg": "46.767.113-8"

	},
	{
		"nome": "Bernardo Alexandre Thales de Paula",
		"idade": 47,
		"cpf": "164.782.792-27",
		"rg": "49.307.964-6"

	},
	{
		"nome": "Aparecida Débora Mariah Martins",
		"idade": 50,
		"cpf": "692.136.669-34",
		"rg": "36.137.959-6"

	},
	{
		"nome": "Jaqueline Marcela Figueiredo",
		"idade": 78,
		"cpf": "974.825.207-83",
		"rg": "14.405.779-7"

	},
	{
		"nome": "Eduardo Henrique Martins",
		"idade": 56,
		"cpf": "238.457.316-05",
		"rg": "33.170.428-6"

	},
	{
		"nome": "Cecília Vitória da Luz",
		"idade": 36,
		"cpf": "576.005.091-56",
		"rg": "43.245.955-8"

	},
	{
		"nome": "Sara Fernanda Ana Baptista",
		"idade": 59,
		"cpf": "143.135.124-54",
		"rg": "29.631.054-2"

	},
	{
		"nome": "Bernardo Miguel Kevin de Paula",
		"idade": 72,
		"cpf": "808.924.001-10",
		"rg": "32.035.176-2"

	},
	{
		"nome": "Stefany Patrícia Josefa Campos",
		"idade": 48,
		"cpf": "981.020.935-52",
		"rg": "46.254.174-5"

	},
	{
		"nome": "Renan Martin Murilo Moura",
		"idade": 19,
		"cpf": "269.616.416-95",
		"rg": "15.001.687-6"

	},
	{
		"nome": "Caroline Heloise Mariane Monteiro",
		"idade": 49,
		"cpf": "384.096.576-43",
		"rg": "42.803.269-2"

	},
	{
		"nome": "Renato Caio Carvalho",
		"idade": 41,
		"cpf": "547.469.151-30",
		"rg": "19.276.734-3"

	},
	{
		"nome": "Luciana Vera Isabelle da Cunha",
		"idade": 45,
		"cpf": "185.521.604-39",
		"rg": "48.352.241-7"

	},
	{
		"nome": "Vera Mariana Tânia da Paz",
		"idade": 22,
		"cpf": "082.000.935-06",
		"rg": "11.861.919-6"

	},
	{
		"nome": "Rita Stella Elza Silveira",
		"idade": 19,
		"cpf": "795.027.478-60",
		"rg": "40.089.356-3"

	},
	{
		"nome": "Henrique Caio Freitas",
		"idade": 57,
		"cpf": "226.886.654-80",
		"rg": "41.890.150-8"

	},
	{
		"nome": "Luan Diogo Edson da Mota",
		"idade": 33,
		"cpf": "283.688.419-33",
		"rg": "36.585.313-6"

	},
	{
		"nome": "Lucas Lopes Pereira",
		"idade": 23,
		"cpf": "123.456.789-00",
		"rg": "19.628.690-9"
	},
	{
		"nome": "Luiz Severino Osvaldo Baptista",
		"idade": 42,
		"cpf": "353.533.645-70",
		"rg": "19.688.690-9"

	},
	{
		"nome": "Manoel Anthony Duarte",
		"idade": 78,
		"cpf": "470.410.857-08",
		"rg": "31.454.778-2"

	},
	{
		"nome": "Levi Caio Gael Oliveira",
		"idade": 32,
		"cpf": "991.186.267-42",
		"rg": "16.859.625-8"

	}
]
module.exports = PESSOAS