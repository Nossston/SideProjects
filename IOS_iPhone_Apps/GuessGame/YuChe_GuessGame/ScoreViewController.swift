//
//  ScoreViewController.swift
//  YuChe_GuessGame
//
//  Created by YuChe Liu #134379189 on 2021/2/24.
//

import UIKit

class ScoreViewController: UIViewController {

    var record = Record()

    @IBOutlet var lblwontimes : UILabel!
    @IBOutlet var lbllosttimes : UILabel!
    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        self.lblwontimes.text = record.won
        self.lbllosttimes.text = record.lost
        
        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
