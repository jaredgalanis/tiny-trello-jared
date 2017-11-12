require 'rake'

desc "run application"
task :run do
  pids = [
    spawn("cd backend && rails s"),
    spawn("cd frontend && ember serve --port 4200 --proxy http://localhost:3000")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  pids.each do |pid|
    Process.wait pid
  end
end
