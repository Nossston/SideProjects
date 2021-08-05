//
//  ListTableViewCell.swift
//  YuChe_GuessGame
//
//  Created by 劉宇哲 on 2021/2/24.
//

import UIKit

class ListTableViewCell: UITableViewCell {

    @IBOutlet var lblAttemps : UILabel!
    @IBOutlet var lblWin : UILabel!
    @IBOutlet var lblLose : UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
