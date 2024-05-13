package com.gamja_farm.authInfo;

public class ChangePwCommand {
	private String currentPassword;
	private String newPassword;
	
	public ChangePwCommand() {
	
	}

	public String getCurrentPassword() {
		return currentPassword;
	}

	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

}
