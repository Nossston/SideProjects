namespace Assignment6.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateCS : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MediaItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StringId = c.String(),
                        Timestamp = c.DateTime(nullable: false),
                        Caption = c.String(nullable: false, maxLength: 200),
                        Content = c.Binary(),
                        ContentType = c.String(nullable: false),
                        Artist_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Artists", t => t.Artist_Id)
                .Index(t => t.Artist_Id);
            
            AddColumn("dbo.Albums", "Summary", c => c.String());
            AddColumn("dbo.Artists", "Biography", c => c.String());
            AddColumn("dbo.Tracks", "AudioContentType", c => c.String(maxLength: 200));
            AddColumn("dbo.Tracks", "Audio", c => c.Binary());
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MediaItems", "Artist_Id", "dbo.Artists");
            DropIndex("dbo.MediaItems", new[] { "Artist_Id" });
            DropColumn("dbo.Tracks", "Audio");
            DropColumn("dbo.Tracks", "AudioContentType");
            DropColumn("dbo.Artists", "Biography");
            DropColumn("dbo.Albums", "Summary");
            DropTable("dbo.MediaItems");
        }
    }
}
