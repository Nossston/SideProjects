//
//  ListTVController.swift
//  YuChe_MyOrder
//
//  Created by YuChe Liu on 2021/2/15.
import UIKit
class ListTVController: UITableViewController {
    var coffeeSet = [Coffee]()
    override func viewDidLoad() {
        super.viewDidLoad()
        self.tableView.rowHeight = 70
    }
    // MARK: - Table view data source
    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.coffeeSet.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "list_cell", for: indexPath) as! ListTableViewCell
        let coffee = coffeeSet[indexPath.row]
        cell.lblQuan.text = String(coffee.quantity)
        cell.lblType.text = coffee.type
        cell.lblSize.text = coffee.size
        return cell
    }
}
