capitalExposureChart.$inject = [ '$scope', '$http', '$modal', 'RowEditor', 'uiGridConstants' ];
function capitalExposureChart($scope, $http, $modal, RowEditor, uiGridConstants) {
	var vm = this;

	vm.editRow = RowEditor.editRow;

	vm.serviceGrid2 = {
		enableRowSelection : true,
		enableRowHeaderSelection : false,
		multiSelect : false,
		enableSorting : true,
		enableFiltering : true,
		enableColumnMenus: false,
		enableGridMenu : true,
		rowTemplate : "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row, 'accountInfo-edit.html')\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
	};

	vm.serviceGrid2.columnDefs = [ {
		field : 'watchListExposure',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'holdingListExposure',
		enableSorting : true,
		enableCellEdit : false
	} ];
	
	var req = {
		method: 'POST',
		url: 'http://localhost:8080/TmesisAPI/',
		headers: {
			'Content-Type': 'application/json'
		},
		data: { function: 'getCapitalExposures', password: 'godMoney' }
	}
	
	$http(req).success(function(data, status) {
		vm.serviceGrid2.data = data;
	})

}
