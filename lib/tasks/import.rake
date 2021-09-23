require 'csv'
namespace :import do 

    desc "Importing coffee beans from csv"
    task users: :environment do 
        filename = File.join Rails.root, "beans.csv"
        CSV.foreach(filename) do |row|
            print row
        end
    end
end