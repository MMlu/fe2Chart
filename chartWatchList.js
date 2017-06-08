watchListChart.$inject = [ '$scope', '$http', '$modal', 'RowEditor', 'uiGridConstants' ];
function watchListChart($scope, $http, $modal, RowEditor, uiGridConstants) {
	var vm = this;

	vm.editRow = RowEditor.editRow;

	vm.serviceGrid = {
		enableRowSelection : true,
		enableRowHeaderSelection : false,
		multiSelect : false,
		enableSorting : true,
		enableFiltering : true,
		enableColumnMenus: false,
		enableGridMenu : true,
		rowTemplate : "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row, 'watchList-edit.html')\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
	};

	vm.serviceGrid.columnDefs = [ 
	{
		field : 'id',
		displayName : 'Id',
		enableSorting : true,
		type : 'number',
		enableCellEdit : false,
		width : 60,
		sort : {
			direction : uiGridConstants.ASC,
			priority : 1,
		},
	}, {
		field : 'symbol',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'instrumentType',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'currency',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'strategy',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'capitalExposure',
		enableSorting : true,
		enableCellEdit : false
	} ];
	
	var req = {
		method: 'POST',
		url: 'http://localhost:8080/TmesisAPI/',
		headers: {
			'Content-Type': 'application/json'
		},
		data: { function: 'getWatchList', password: 'godMoney' }
	}
	$http(req).success(function(data, status) {
		vm.serviceGrid.data = data;
	})
	
	/*
	vm.serviceGrid.data = [
	{
		"id":35,
		"Account":"IB1234567",
		"InstrumentType":"FX",
		"TicketName":"abc",
		"Strategy":"LongSystem",
		"CapitalExposure":"100000",
		"AvailableMargin":"5003521",
		"TotalClosedProfit":"232.15",
	},
	{
		"id":35,
		"Account":"IB8888888",
		"InstrumentType":"FT",
		"TicketName":"cfe",
		"Strategy":"ShortSystem",
		"CapitalExposure":"200000",
		"AvailableMargin":"1234567",
		"TotalClosedProfit":"2332.23",
	}];*/

	$scope.addRow = function() {
		var newService = {
			"id" : "0",
			"category" : "public",
			"exposednamespace" : "http://bced.wallonie.be/services/",
			"exposedoperation" : "-",
			"exposedws" : "-",
			"path" : "//*[local-name()='-']/text()",
			"provider" : "BCED",
			"version" : "1.0"
		};
		var rowTmp = {};
		rowTmp.entity = newService;
		vm.editRow($scope.vm.serviceGrid, rowTmp, "watchList-edit.html");
	};

}
