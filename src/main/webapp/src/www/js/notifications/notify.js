window.notify = {
	info: function(message)
	{
		var notification = new NotificationFx({
			message : '<p>'+message+'</p>',
			layout : 'growl',
			effect : 'jelly',
			type : 'notice',
			ttl : 2000,
			onClose : function() {
			}
		});

		notification.show();
	},

	warn: function(message)
	{
		var notification = new NotificationFx({
			message : '<p>'+message+'</p>',
			layout : 'growl',
			effect : 'jelly',
			type : 'warning',
			onClose : function() {
			}
		});

		notification.show();
	},

	error: function(message)
	{
		var notification = new NotificationFx({
			message : '<p>'+message+'</p>',
			layout : 'growl',
			effect : 'jelly',
			type : 'error',
			onClose : function() {
			}
		});

		notification.show();
	},

	success: function(message)
	{
		var notification = new NotificationFx({
			message : '<p>'+message+'</p>',
			layout : 'growl',
			effect : 'jelly',
			type : 'success',
			onClose : function() {
			}
		});

		notification.show();
	}
};
