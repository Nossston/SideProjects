//
//  OrderViewController.swift
//  YuChe_MyOrder
//
//  Created by YuChe Liu on 2021/2/16.
//

import UIKit

class OrderViewController: UIViewController {

    var coffeeList = [Coffee]()
    @IBOutlet var pkrCoffee : UIPickerView!
    @IBOutlet var segSize : UISegmentedControl!
    @IBOutlet var tfQuan : UITextField!
    let coffeeTypeList = ["American Coffee","Expresso","Iced Coffee","Latte","Venice Coffee","Long Black","Capuccino","Coffee Mocca","Coffee with Cream"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Coffee Order Page"
        self.pkrCoffee.dataSource = self
        self.pkrCoffee.delegate = self
        let btnAddTask =  UIBarButtonItem(title: "View Order", style: .plain, target: self  , action:#selector(goToListScreen) )
        self.navigationItem.setRightBarButton(btnAddTask, animated: true)
    }
    @objc func goToListScreen(){
        let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
        let ListTVC = storyboard.instantiateViewController(identifier: "ListTVC") as! ListTVController
        ListTVC.coffeeSet = coffeeList
        self.navigationController?.pushViewController(ListTVC, animated: true)
    }
    @IBAction func addCoffee(){
//        print(self.tfQuan.hashValue)
        if (!self.tfQuan.text!.isEmpty) {
            let q = Int(self.tfQuan.text!) ?? 0
            coffeeList.append(Coffee(type: self.coffeeTypeList[self.pkrCoffee.selectedRow(inComponent: 0)], size: self.segSize.titleForSegment(at: self.segSize.selectedSegmentIndex)!, quantity: q) )
            self.askConfirmation()
        }else{
            showError(errorMessage: "Must enter the quantity")
        }
    }
    
    func showError(errorMessage: String){
        let errorAlert = UIAlertController(title: "Error", message: errorMessage, preferredStyle: .alert)
        errorAlert.addAction(UIAlertAction(title: "Dismiss", style: .default, handler: nil))
        self.present(errorAlert, animated: true, completion: nil)
    }
    
    func askConfirmation() {
        let confirmAlert = UIAlertController (title: "Confirmation", message: "Please verify your information to order a coffee", preferredStyle: .actionSheet)
        confirmAlert.addAction(UIAlertAction (title: "Confirm", style: .default, handler:{_ in
        } ))
        confirmAlert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil) )
        self.present(confirmAlert, animated: true, completion: nil)
    }

}

extension OrderViewController : UIPickerViewDelegate, UIPickerViewDataSource{
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1;
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        if (component==0) {
            return self.coffeeTypeList.count
        }
        return 0
    }
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        switch component {
        case 0:
            return self.coffeeTypeList[row]
        default:
            return ""
        }
    }
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
//        print(#function, "Selected Coffee : \(self.coffeeTypeList[row])")
        print("Selected Coffee : \(self.coffeeTypeList[row])")

        switch component {
        case 0:
            break
        default:
            break
        }
    }

    
    
}
